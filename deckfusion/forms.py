from django import forms

from .models import Brand, Stat

from django.forms.widgets import TextInput


class BrandForm(forms.ModelForm):
    class Meta:
        model = Brand
        fields = ["name", "description", "tagline", "color", "django_color"]
        widgets = {
            "color": TextInput(attrs={"type": "color"}),
        }

    def __init__(self, *args, **kwargs):
        super(BrandForm, self).__init__(*args, **kwargs)
        if self.instance:
            self.fields["color"].widget = TextInput(
                attrs={"type": "color", "title": self.instance.color}
            )


class StatForm(forms.ModelForm):
    class Meta:
        model = Stat
        fields = ["stat"]
