from django.urls import path

from .views import EntryDetailView, EntryListView, AddDetailView

urlpatterns = [
  path('entry/<int:pk>', EntryDetailView.as_view(), name='entry_detail'),
  path('', EntryListView.as_view(), name='home'),
  path('add/<int:pk>', AddDetailView.as_view(), name='add_detail'),
]