# Generated by Django 3.0.7 on 2020-06-23 13:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0002_auto_20200622_1757'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='batchmember',
            name='id',
        ),
        migrations.AlterField(
            model_name='batchmember',
            name='alphanum_code',
            field=models.CharField(help_text='Alphanumeric Code', max_length=15, primary_key=True, serialize=False),
        ),
    ]