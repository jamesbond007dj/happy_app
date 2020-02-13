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

  def get_queryset(self):
    current = []
    for e in Entry.objects.all():
      start_times = StartTime.objects.filter(entry=e.id)
      end_times = EndTime.objects.filter(entry=e.id)
      times = zip(start_times, end_times)
      if is_current(e,times):
        current.append(e)

    return current

def is_current(e,times):
  current_time = datetime.now().time()
  today = day_name[datetime.today().weekday()]

  for time_pair in times:
    today_start_time = time_pair[0].time
    today_end_time = time_pair[1].time
    today_day = time_pair[0].day
    if today == today_day:
      if current_time >= today_start_time and current_time < today_end_time:
        return True
    else:
      return False