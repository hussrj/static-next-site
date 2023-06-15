---
title: 'Using the OWASP Juice Shop for fun and security skill practice'
excerpt: 'OWASP Juice Shop is an insecure web application that can be used for security training and awareness'
coverImage: '/assets/locked.jpg'
date: '2021-04-06T05:09:00.000Z'
author:
  name: Rob Hussey
  picture: '/assets/blog/authors/light-huss.jpg'
ogImage:
  url: '/ogrjhuss.png'
---

## Quick note for those working with Large Language Models (LLMs)
As of 2023-06-02, there is a draft version of the Top 10 List for Large Language Models. You can review the draft at [OWASP Top 10 Draft](https://owasp.org/www-project-top-10-for-large-language-model-applications/descriptions/).
You can perform testing that includes LLMs (vulnerability and traffic-based analysis) using Burp Suite + BurpGPT: [BurpGPT](https://burpgpt.app/)

## A security playground

The Juice Shop project is hosted at [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/). They describe it as "probably the most modern and sophisticated insecure web application." For myself, I'm interested in seeing and exploiting real-world examples of security flaws.

## Keep it contained

Thankfully, there is a [docker image](https://hub.docker.com/r/bkimminich/juice-shop) available for the juice shop. Running it is as simple as pulling the image in docker and then running


```
docker run --rm -p 3000:3000 bkimminich/juice-shop
```
The app will be available at http://localhost:3000
