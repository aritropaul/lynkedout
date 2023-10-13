import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// linkedin job preview scraper

import * as cheerio from 'cheerio';

export async function getDetails(id: string) {
    let cleanID = id? id.match(/(\d){10}/g) : []
    const url = 'https://www.linkedin.com/jobs/view/'+ (cleanID? cleanID[0] : '')
    const res = await fetch(url, {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
    })
    const data = await res.text()

    const $ = cheerio.load(data)

    var job = {
        id: (cleanID? cleanID[0] : ''),
        title: '',
        desc: '',
        tags: [{key:'', value:''}],
        company: '',
        link: '',
        img: '',
        pay: '',
        time: ''
    }

    job['title'] = $('h1.topcard__title').text()
    job['desc'] = $('div.show-more-less-html__markup').contents().filter(function() {
        return this.type === 'text';
    }).eq(0).text().trim();

    job['company'] = $('a.topcard__org-name-link').text().trim()
    job['link'] = $('a.topcard__org-name-link').attr('href') ?? ''
    job['img'] = $('div.top-card-layout__card').find('a').find('.artdeco-entity-image').attr('data-delayed-url') ?? ''
    if ($('div.decorated-job-posting__details').find('.compensation__salary-range').length > 0) {
        // console.log($('div.decorated-job-posting__details').find('.compensation__salary-range').html())
        job['pay'] = $('div.decorated-job-posting__details').find('.compensation__salary-range').find('.salary').text().trim()
    }
    else {
        let pay = $('div.description__text').text().match(/\$\d{1,3}(,?\d{3})*—\$\d{1,3}(,?\d{3})* USD/g)
        job['pay'] = pay? pay[0] : ''
    }
    const crit = $('li.description__job-criteria-item').toArray().map(function(x){ return {'key': $(x).find('h3').text().trim(), 'value': $(x).find('span').text().trim() }})
    job['tags'] = crit
    job['time'] = $('span.posted-time-ago__text').text().trim()


    console.log(job)
    return job
}