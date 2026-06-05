# Lekan Motors

Production starter for `lekan-motors.online`.

## Features
- Public dealership website using the selected Lekan Motors logo
- Searchable vehicle inventory
- Individual car pages with galleries and WhatsApp enquiry
- Secure admin login
- Add, edit, reserve, mark sold, hide and delete cars
- Upload multiple photos per car
- Supabase database, authentication and image storage

## Setup
1. Create a Supabase project.
2. Run `supabase/schema.sql` in Supabase SQL Editor.
3. Create the owner's login under Authentication > Users.
4. Copy `.env.example` to `.env.local` and enter the Supabase URL and anon key.
5. Run `npm install` then `npm run dev`.
6. Public site: `http://localhost:3000`; admin login: `http://localhost:3000/login`.

## Deployment
Deploy the Git repository to Vercel, add the environment variables, then add `lekan-motors.online` and `www.lekan-motors.online` in Vercel. Copy Vercel's DNS records into Spaceship DNS. SSL is created automatically after DNS verification.

## Logo
The supplied JPG had a visible checkerboard pattern. A cleaned transparent PNG is included in `public/lekan-motors-logo.png`. An original SVG remains preferable for future signs and printing.
