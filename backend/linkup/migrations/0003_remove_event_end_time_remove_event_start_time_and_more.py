# Generated by Django 4.0.5 on 2022-09-04 08:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('linkup', '0002_remove_user_username'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='end_time',
        ),
        migrations.RemoveField(
            model_name='event',
            name='start_time',
        ),
        migrations.AddField(
            model_name='event',
            name='date',
            field=models.DateField(null=True),
        ),
    ]
