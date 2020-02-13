# Generated by Django 3.0.3 on 2020-02-13 16:10

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('happy', '0014_auto_20200213_0325'),
    ]

    operations = [
        migrations.AlterField(
            model_name='endtime',
            name='day',
            field=models.CharField(choices=[('mon', 'Monday'), ('tue', 'Tuesday'), ('wed', 'Wednesday'), ('thu', 'Thursday'), ('fri', 'Friday'), ('sat', 'Saturday'), ('sun', 'Sunday')], default='mon', max_length=10),
        ),
        migrations.AlterField(
            model_name='endtime',
            name='time',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 836566), null=True),
        ),
        migrations.AlterField(
            model_name='starttime',
            name='time',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 836090), null=True),
        ),
    ]