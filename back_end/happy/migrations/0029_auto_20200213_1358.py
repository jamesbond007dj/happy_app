# Generated by Django 3.0.3 on 2020-02-13 21:58

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('happy', '0028_auto_20200213_1332'),
    ]

    operations = [
        migrations.AlterField(
            model_name='endtime',
            name='time',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 22666), null=True),
        ),
        migrations.AlterField(
            model_name='starttime',
            name='time',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 22195), null=True),
        ),
    ]