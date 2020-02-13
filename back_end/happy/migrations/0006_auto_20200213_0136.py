# Generated by Django 3.0.3 on 2020-02-13 01:36

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('happy', '0005_auto_20200213_0133'),
    ]

    operations = [
        migrations.AlterField(
            model_name='entry',
            name='friday_end_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 913748), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='friday_end_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 914192), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='friday_start_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 913721), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='friday_start_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 914162), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='monday_end_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 913512), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='monday_end_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 913921), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='monday_start_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 913467), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='monday_start_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 913893), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='saturday_end_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 913806), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='saturday_end_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 914251), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='saturday_start_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 913777), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='saturday_start_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 914220), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='sunday_end_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 913863), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='sunday_end_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 914311), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='sunday_start_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 913835), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='sunday_start_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 914281), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='thursday_end_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 913692), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='thursday_end_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 914091), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='thursday_start_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 913662), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='thursday_start_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 914062), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='tuesday_end_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 913574), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='tuesday_end_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 913977), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='tuesday_start_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 913543), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='tuesday_start_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 913948), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='wednesday_end_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 913633), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='wednesday_end_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 914034), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='wednesday_start_time_1',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 913603), null=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='wednesday_start_time_2',
            field=models.TimeField(blank=True, default=datetime.time(0, 0, 0, 914006), null=True),
        ),
    ]
