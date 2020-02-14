from django.db import models
from django.contrib.auth.models import User
from datetime import datetime

MON = 'Monday'
TUE = 'Tuesday'
WED = 'Wednesday'
THU = 'Thursday'
FRI = 'Friday'
SAT = 'Saturday'
SUN = 'Sunday'

class Entry(models.Model):
  author = models.ForeignKey(User, on_delete=models.CASCADE)
  title = models.CharField(max_length=50)
  description = models.TextField(null=True,blank=True)
  menu = models.TextField(null=True,blank=True)
  address = models.CharField(max_length=120,null=True,blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  @property
  def times(self):
    start_times = self.starttime_set.all()
    end_times = self.endtime_set.all()
    zipped_times = zip(start_times,end_times)
    times_list = []

    for time_pair in zipped_times:
      start_time_obj = time_pair[0]
      end_time_obj = time_pair[1]
      start_time_day = start_time_obj.day
      start_time = start_time_obj.time
      start_time_str = start_time.strftime('%H:%M')
      end_time = end_time_obj.time 
      end_time_str = end_time.strftime('%H:%M')
      times_list.append(f'{start_time_day} {start_time_str} - {end_time_str}')

    return times_list        
  
  @property
  def comments(self):
    return [i.body for i in self.comment_set.all()]
     

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

class Comment(models.Model):
  body = models.TextField(null=True,blank=True)
  entry = models.ForeignKey(Entry, on_delete=models.CASCADE)
