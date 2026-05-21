from django.db import models

class Booking(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, default="") 
    phone = models.CharField(max_length=20, default="")   
    service = models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField()

    def __str__(self):
        return self.name