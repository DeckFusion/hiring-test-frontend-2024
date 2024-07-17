# Frontend Developer Hiring Test 2024: Create Brand Flow

## Installation

Given that you did not provide a skeleton for how you want to run the code, 
I took the liberty of using tools I'm familiar with.

The bootstraping of this project was heavily inspired by [this blog post](https://geoff.tuxpup.com/posts/django_tailwind_htmx_how_i_start/)

You will need to have [rye](https://rye.astral.sh/) installed as well as [just](https://github.com/casey/just).

1. Rye is fantastic at managing python projects (way better than poetry)
2. Just is Makefiles on steroids

## Setup

Run the following commands:

```sh
rye sync
rye run pre-commit install
rye run pre-commit autoupdate
```

Already done for you were the following commands:

```sh
rye run django-admin startproject config .
rye run python manage.py tailwind init
rye run python manage.py tailwind install
rye run python manage.py startapp deckfusion
rye run python manage.py migrate
```

## Starting

You need to start both tailwind server and django server.

```sh
just tailwind
just dev
```

(The commands can be found inside the justfile)


----

# Post Work

What's done:

1. Bootstrapped project with django, htmx, tailwind
2. Landing page with deckfusion logo. This takes you to page where you can start building forms
3. Forms created with crispy to add a bit of taste to them
4. Navigation from 

What was not done:

1. While form validation is checking (from stats, press on next), I did not have time to enforce staying on the page until its valid.
2. I want to include the color picker from [django-colorpicker](https://github.com/fabiocaccamo/django-colorfield) but failed to have the picker. Instead i tried with a widget which gave me a color picker. Yey. But, then didn't have time to put them together.
3. Was unable to add a file upload.
4. No time to do client side validation
