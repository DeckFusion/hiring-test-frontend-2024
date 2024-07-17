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
rye run python manage.py startapp reading_journal
rye run python manage.py migrate
```

## Starting

You need to start both tailwind server and django server.

```sh
just tailwind
just dev
```

(The commands can be found inside the justfile)
