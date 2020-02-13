from django.urls import path

from .views import EntryDetailView, EntryListView, AddDetailView, CurrentListView

urlpatterns = [
  path('entry/<int:pk>/', EntryDetailView.as_view(), name='entry_detail'),
  path('', EntryListView.as_view(), name='home'),
  path('add/<int:pk>/', AddDetailView.as_view(), name='add_detail'),
  path('current', CurrentListView.as_view(), name='current')
]