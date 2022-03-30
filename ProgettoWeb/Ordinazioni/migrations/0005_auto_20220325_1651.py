# Generated by Django 2.2.13 on 2022-03-25 15:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Ordinazioni', '0004_ombrellone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ombrellone',
            name='note',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='prodotto',
            name='categoria',
            field=models.CharField(default='Bar', max_length=30),
        ),
        migrations.AlterField(
            model_name='prodotto',
            name='description',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='prodotto',
            name='note',
            field=models.TextField(max_length=240, null=True),
        ),
    ]