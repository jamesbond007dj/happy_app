from rest_framework import serializers
from .models import Entry, Comment


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
            'times',
            'comments',
        ]

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = [
            'entry',
            "body",
        ]