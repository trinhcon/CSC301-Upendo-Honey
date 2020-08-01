# Generated by Django 3.0.7 on 2020-07-31 00:18

from django.db import migrations, models
import django.db.models.deletion
import web.models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0006_auto_20200706_1711'),
    ]

    operations = [
        migrations.RenameField(
            model_name='honey',
            old_name='variety',
            new_name='variety_message',
        ),
        migrations.RemoveField(
            model_name='forest',
            name='description',
        ),
        migrations.RemoveField(
            model_name='honey',
            name='harvest_description',
        ),
        migrations.RemoveField(
            model_name='honey',
            name='harvest_photo',
        ),
        migrations.RemoveField(
            model_name='honey',
            name='health_description',
        ),
        migrations.AlterField(
            model_name='batch',
            name='forest',
            field=models.ForeignKey(help_text='Forest that Batch came from, optional', on_delete=django.db.models.deletion.CASCADE, to='web.Forest'),
        ),
        migrations.AlterField(
            model_name='batch',
            name='honey',
            field=models.ForeignKey(help_text='Batch honey, optional', on_delete=django.db.models.deletion.CASCADE, to='web.Honey'),
        ),
        migrations.AlterField(
            model_name='batchmember',
            name='external_url',
            field=models.URLField(),
        ),
        migrations.AlterField(
            model_name='batchmember',
            name='logo',
            field=web.models.CustomImageField(upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='beekeeper',
            name='letter_photo',
            field=web.models.CustomImageField(upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='beekeeper',
            name='photo',
            field=web.models.CustomImageField(upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='forest',
            name='photo',
            field=web.models.CustomImageField(upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='honey',
            name='jar_photo',
            field=web.models.CustomImageField(upload_to='images/'),
        ),
    ]
