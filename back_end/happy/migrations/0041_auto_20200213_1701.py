# Generated by Django 3.0.3 on 2020-02-14 01:01

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('happy', '0040_auto_20200213_1653'),
    ]

    operations = [
        migrations.AlterField(
            model_name='endtime',
            name='time',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 837402), null=True),
        ),
        migrations.AlterField(
            model_name='starttime',
            name='time',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 837000), null=True),
        ),
    ]