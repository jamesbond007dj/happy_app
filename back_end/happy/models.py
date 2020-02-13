from django.db import models
from django.contrib.auth.models import User
from datetime import datetime

DAYS = [
    ('mon', 'Monday'),
    ('tue', 'Tuesday'),
    ('wed', 'Wednesday'),
    ('thu', 'Thursday'),
    ('fri', 'Friday'),
    ('sat', 'Saturday'),
    ('sun', 'Sunday'),
]
MON = 'mon'
TUE = 'tue'
WED = 'wed'
THU = 'thu'
FRI = 'fri'
SAT = 'sat'
SUN = 'sun'

class Entry(models.Model):
  author = models.ForeignKey(User, on_delete=models.CASCADE)
  title = models.CharField(max_length=50)
  # start_time = models.TimeField(null=True,blank=True)
  # end_time = models.TimeField(null=True,blank=True)
  image = models.ImageField(upload_to='images/',blank=True)
  description = models.TextField(null=True,blank=True)
  menu = models.TextField(null=True,blank=True)
  address = models.CharField(max_length=120,null=True,blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  
  def __str__(self):
    return self.title

class StartTime(models.Model):
  time = models.TimeField(default=datetime.now().time().replace(hour=0, minute=0, second=0),null=True,blank=True)
  day_choice = [
    (MON, 'Monday'),
    (TUE, 'Tuesday'),
    (WED, 'Wednesday'),
    (THU, 'Thursday'),
    (FRI, 'Friday'),
    (SAT, 'Saturday'),
    (SUN, 'Sunday'),
]
  day = models.CharField(
      max_length=10,
      choices=day_choice,
      default=MON,
  )
  entry = models.ForeignKey(Entry, on_delete=models.CASCADE)

class EndTime(models.Model): 
  time = models.TimeField(default=datetime.now().time().replace(hour=0, minute=0, second=0),null=True,blank=True)
  day_choice = [
    (MON, 'Monday'),
    (TUE, 'Tuesday'),
    (WED, 'Wednesday'),
    (THU, 'Thursday'),
    (FRI, 'Friday'),
    (SAT, 'Saturday'),
    (SUN, 'Sunday'),
]
  day = models.CharField(
      max_length=10,
      choices=day_choice,
      default=MON,
  )
  entry = models.ForeignKey(Entry, on_delete=models.CASCADE)