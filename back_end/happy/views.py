from rest_framework import generics
from .models import Entry, StartTime, EndTime
from .serializers import EntrySerializer
from .permissions import IsAuthorOrReadOnly
from datetime import datetime
from calendar import day_name

class EntryListView(generics.ListCreateAPIView):
  queryset = Entry.objects.all()
  serializer_class = EntrySerializer

class EntryDetailView(generics.RetrieveUpdateDestroyAPIView):
  queryset = Entry.objects.all()
  serializer_class = EntrySerializer
  permission_classes = (IsAuthorOrReadOnly,)

class AddDetailView(generics.RetrieveUpdateDestroyAPIView):
  queryset = Entry.objects.all()
  serializer_class = EntrySerializer
  permission_classes = (IsAuthorOrReadOnly,)

class CurrentListView(generics.ListAPIView):
  serializer_class = EntrySerializer
  # def get_querysetxxx(self):
  #   today = day_name[datetime.today().weekday()].lower()
  #   ## monday equals 0, sunday equals 6
  #   start_time_1 = today + '_start_time_1'
  #   start_time_2 = today + '_start_time_2'
  #   end_time_1 = today + '_end_time_1'
  #   end_time_2 = today + '_end_time_2'
  #   current_time = datetime.now().strftime('%X')
  #   return Entry.objects.all().filter(start_time_1__lte=current_time).filter(end_time_1__gte=current_time)

  def get_queryset(self):
    today = day_name[datetime.today().weekday()].lower()
    current = []
    for e in Entry.objects.all():
      start_times = StartTime.objects.filter(entry=e.id)
      end_times = EndTime.objects.filter(entry=e.id)
      times = zip(start_times, end_times)
      thing = is_current(e,times)
      if thing:
        current.append((e, thing))
        return 

    return current

def is_current(e,times):
  # day_start_time_1 = today + '_start_time_1'
  # day_end_time_1 = today + '_end_time_1'
  # day_start_time_2 = today + '_start_time_2'
  # day_end_time_2 = today + '_end_time_2'
  current_time = datetime.now().time()
  # entry_start_time_1 = e.__dict__[day_start_time_1]
  # entry_end_time_1 = e.__dict__[day_end_time_1]
  # entry_start_time_2 = e.__dict__[day_start_time_2]
  # entry_end_time_2 = e.__dict__[day_end_time_2]
  # print('hallllllo',e.__dict__)
  for time_pair in times:
    if current_time > time_pair[0].time and current_time < time_pair[1].time:
      return True
    else:
      return False