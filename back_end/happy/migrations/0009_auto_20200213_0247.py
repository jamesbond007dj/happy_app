# Generated by Django 3.0.3 on 2020-02-13 02:47

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('happy', '0008_auto_20200213_0237'),
    ]

    operations = [
        migrations.AddField(
            model_name='entry',
            name='endTime',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='entry',
            name='startTime',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='endtime',
            name='time',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 834488), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='friday_end_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 832552), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='friday_end_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 833012), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='friday_start_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 832523), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='friday_start_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 832984), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='monday_end_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 832319), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='monday_end_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 832783), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='monday_start_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 832277), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='monday_start_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 832754), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='saturday_end_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 832610), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='saturday_end_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 833069), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='saturday_start_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 832582), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='saturday_start_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 833041), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='sunday_end_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 832668), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='sunday_end_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 833125), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='sunday_start_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 832639), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='sunday_start_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 833098), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='thursday_end_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 832493), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='thursday_end_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 832956), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='thursday_start_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 832465), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='thursday_start_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 832926), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='tuesday_end_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 832377), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='tuesday_end_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 832841), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='tuesday_start_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 832348), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='tuesday_start_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 832812), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='wednesday_end_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 832436), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='wednesday_end_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 832899), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='wednesday_start_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 832407), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='wednesday_start_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 832870), null=True),
        ),
        migrations.AlterField(
            model_name='starttime',
            name='time',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 834141), null=True),
        ),
    ]
