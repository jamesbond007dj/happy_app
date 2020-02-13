# Generated by Django 3.0.3 on 2020-02-13 02:37

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('happy', '0007_auto_20200213_0208'),
    ]

    operations = [
        migrations.AlterField(
            model_name='endtime',
            name='time',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 232846), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='friday_end_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 230912), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='friday_end_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 231322), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='friday_start_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 230882), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='friday_start_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 231292), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='monday_end_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 230600), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='monday_end_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 231089), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='monday_start_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 230554), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='monday_start_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 231059), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='saturday_end_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 230971), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='saturday_end_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 231380), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='saturday_start_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 230942), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='saturday_start_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 231351), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='sunday_end_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 231029), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='sunday_end_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 231437), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='sunday_start_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 230999), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='sunday_start_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 231409), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='thursday_end_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 230852), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='thursday_end_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 231263), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='thursday_start_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 230823), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='thursday_start_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 231235), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='tuesday_end_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 230732), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='tuesday_end_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 231148), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='tuesday_start_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 230632), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='tuesday_start_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 231117), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='wednesday_end_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 230794), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='wednesday_end_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 231206), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='wednesday_start_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 230764), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='wednesday_start_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 231177), null=True),
        ),
        migrations.AlterField(
            model_name='starttime',
            name='time',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 232436), null=True),
        ),
    ]