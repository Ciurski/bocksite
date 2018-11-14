from django.contrib import admin

# Register your models here.
from .models import Contest, Result
admin.site.register(Contest)
admin.site.register(Result)
