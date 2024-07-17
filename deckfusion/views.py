from django.http import HttpRequest
from django.shortcuts import redirect, render

from django.urls import reverse

from . import forms
from .forms import BrandForm, StatForm


def index(request: HttpRequest):
    return render(request, "deckfusion/index.html", {})


def info(request: HttpRequest):
    form = BrandForm(request.POST or None)
    ctx = {
        "form": form,
        # "nav_links": nav_links,
    }
    if request.method == "POST":
        if form.is_valid():
            # form.save()
            # book = form.instance
            return redirect("visual_identity")
    return render(request, "deckfusion/info_form.html", ctx)


def visual_identity(request: HttpRequest):
    form = BrandForm(request.POST or None)
    ctx = {
        "form": form,
        # "nav_links": nav_links,
    }
    return render(request, "deckfusion/visual_idendity_form.html", ctx)


def stats(request: HttpRequest):
    form = StatForm(request.POST or None)
    ctx = {
        "form": form,
        # "nav_links": nav_links,
    }
    return render(request, "deckfusion/stats_form.html", ctx)
