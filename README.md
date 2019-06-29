# NxbRepas - A turn management App

## Introduction

Turn management for the *repás* which will allow to create turns, and let people to join them.
Will be also possible to list turns and users.
Users will be able to join to the turns by theirselves if there are gaps, but teachers would be also allowed to move pupils between turns in order to organize them, if it is needed.

So if a pupil is moved by the teacher to another turn he or she will recieve a notification. (Not decided yet if it will be as push notification or another via (Whatsapp or Telegram)

To sum up, the final goal of the app is allow teachers to create turns, and let users to sign up.

## Learning Goals

Some of the learning goals of this little project are:

- Acquire deeper knowledge with Angular and NestJS.
- Learn how to develop abstract and reusable components using container and presentational patterns.
- Learn how TypeOrm works.
- Learn about state management using NGXS.
- Lear how to develop apps using the workspace approach (Using NX Workspace).
- Learn about Angular Schematics.

## Stack

- [x] NestJS
- [x] TypeOrm
- [x] Angular 8+
- [x] Postgres
- [x] Ngxs
- [x] Nebular
- [x] Cypress
- [x] Jest
- [x] Docker

## Project structure

I am going to follow the feature - module architecture, but here all the functionalities that could be shared will be generated at the libs library following the Nx Workspace approach.
