from rest_framework import serializers
from .models import Entry


class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entry
        fields = [
            "id",
            "title",
            "monday_start_time_1",
            "monday_end_time_1",
            "tuesday_start_time_1",
            "tuesday_end_time_1",
            "wednesday_start_time_1",
            "wednesday_end_time_1",
            "thursday_start_time_1",
            "thursday_end_time_1",
            "friday_start_time_1",
            "friday_end_time_1",
            "saturday_start_time_1",
            "saturday_end_time_1",
            "sunday_start_time_1",
            "sunday_end_time_1",
            "monday_start_time_2",
            "monday_end_time_2",
            "tuesday_start_time_2",
            "tuesday_end_time_2",
            "wednesday_start_time_2",
            "wednesday_end_time_2",
            "thursday_start_time_2",
            "thursday_end_time_2",
            "friday_start_time_2",
            "friday_end_time_2",
            "saturday_start_time_2",
            "saturday_end_time_2",
            "sunday_start_time_2",
            "sunday_end_time_2",
            "image",
            "description",
            "menu",
            "address",
        ]
