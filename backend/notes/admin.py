from django.contrib import admin
from .models import Note

model_list = [Note]
admin.site.register(model_list)