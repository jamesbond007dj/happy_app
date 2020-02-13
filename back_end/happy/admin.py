from django.contrib import admin
from .models import Entry, StartTime, EndTime

# admin.site.register(Entry)

class StartTimeAdmin(admin.TabularInline):
    model = StartTime

class EndTimeAdmin(admin.TabularInline):
    model = EndTime

class RuleAdmin(admin.ModelAdmin):
   inlines = [StartTimeAdmin, EndTimeAdmin]

admin.site.register(Entry,RuleAdmin)