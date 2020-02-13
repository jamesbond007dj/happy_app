from rest_framework import generics
from .models import Entry
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
  def get_querysetxxx(self):
    today = day_name[datetime.today().weekday()].lower()
    ## monday equals 0, sunday equals 6
    start_time_1 = today + '_start_time_1'
    start_time_2 = today + '_start_time_2'
    end_time_1 = today + '_end_time_1'
    end_time_2 = today + '_end_time_2'
    current_time = datetime.now().strftime('%X')
    return Entry.objects.all().filter(start_time_1__lte=current_time).filter(end_time_1__gte=current_time)

  def get_queryset(self):
    today = day_name[datetime.today().weekday()].lower()
    current = []
    for e in Entry.objects.all():
      if is_current(e,today):
        current.append(e)

    return current

def is_current(e,today):
  day_start_time_1 = today + '_start_time_1'
  day_end_time_1 = today + '_end_time_1'
  print('entrtyyyy', e.__dict__[day_start_time_1])
  current_time = datetime.now().strftime('%X')
  entry_start_time = e.__dict__[day_start_time_1].strftime('HH:mm:ss (%H:%M:%S)')
  entry_end_time = str(e.__dict__[day_end_time_1])
  if current_time > entry_start_time and current_time < entry_end_time:
    return True
  else:
    return False