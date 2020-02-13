from rest_framework import serializers
from .models import Entry


class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entry
        fields = [
            "id",
            "author",
            "title",
            "description",
            "menu",
            "address",
            'times'
        ]