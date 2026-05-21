from django.contrib import admin
from .models import Booking


class BookingAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'service', 'date', 'time') 
    list_filter = ('date', 'service') 

admin.site.register(Booking, BookingAdmin)