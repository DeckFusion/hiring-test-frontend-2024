from django.urls import path, include

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("brand/info", views.info, name="info"),
    path("brand/visual_identity", views.visual_identity, name="visual_identity"),
    path("brand/stats", views.stats, name="stats"),
]
