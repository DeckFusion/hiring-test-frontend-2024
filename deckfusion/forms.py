from django import forms

from .models import Brand, Stat


class BrandForm(forms.ModelForm):
    class Meta:
        model = Brand
        fields = ["name", "description", "tagline", "color"]


class StatForm(forms.ModelForm):
    class Meta:
        model = Stat
        fields = ["stat"]
