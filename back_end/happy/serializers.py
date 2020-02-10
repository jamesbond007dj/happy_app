from rest_framework import serializers
from .models import Entry

class EntrySerializer(serializers.ModelSerializer):
  class Meta:
    model = Entry
    fields = [
      'id','title','image','happy_hours', 'description', 'menu', 'address', 'updated_at'
    ]
