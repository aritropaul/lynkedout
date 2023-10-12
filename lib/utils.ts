import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import * as cheerio from 'cheerio';

export async function getDetails(id: string) {
    const url = 'https://www.linkedin.com/jobs/view/'+id
    const res = await fetch(url, {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
    })
    const data = await res.text()
    const $ = cheerio.load(data)
    var job = {
        title: '',
        company: '',
        link: '',
        img: '',
        pay: ''
    }
    job['title'] = $('h1.topcard__title').text()
    job['company'] = $('a.topcard__org-name-link').text().trim()
    job['link'] = $('a.topcard__org-name-link').attr('href') ?? ''
    job['img'] = $('div.top-card-layout__card').find('a').find('.artdeco-entity-image').attr('data-delayed-url') ?? ''
    if ($('div.decorated-job-posting__details').find('.compensation__salary-range').length > 0) {
        // console.log($('div.decorated-job-posting__details').find('.compensation__salary-range').html())
        job['pay'] = $('div.decorated-job-posting__details').find('.compensation__salary-range').find('.salary').text().trim()
    }
    return job
}