from rest_framework import generics
from .models import Entry
from .serializers import EntrySerializer
from .permissions import IsAuthorOrReadOnly

class EntryListView(generics.ListCreateAPIView):
  queryset = Entry.objects.all()
  serializer_class = EntrySerializer

class EntryDetailView(generics.RetrieveUpdateDestroyAPIView):
  queryset = Entry.objects.all()
  serializer_class = EntrySerializer
  permission_classes = (IsAuthorOrReadOnly)

class AddDetailView(generics.RetrieveUpdateDestroyAPIView):
  queryset = Entry.objects.all()
  serializer_class = EntrySerializer
  permission_classes = (IsAuthorOrReadOnly)