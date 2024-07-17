from django.db import models

from colorfield.fields import ColorField

# Create your models here.


class Brand(models.Model):
    name = models.CharField(max_length=255, blank=True)
    description = models.CharField(max_length=255, blank=True)
    tagline = models.CharField(max_length=255, blank=True)

    color = models.CharField(max_length=7, default="#023458")
    django_color = ColorField(default="#FF0000")

    # def __str__(self):
    #     return self.name


class Stat(models.Model):
    stat = models.CharField(max_length=255, blank=True)
    # authors = models.ManyToManyField(Author)

    def __str__(self):
        return self.stat
