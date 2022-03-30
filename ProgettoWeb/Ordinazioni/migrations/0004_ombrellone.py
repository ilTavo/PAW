# Generated by Django 2.2.13 on 2022-03-24 16:43

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Ordinazioni', '0003_delete_customuser'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ombrellone',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data_reset', models.DateField()),
                ('note', models.CharField(max_length=30)),
                ('user', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]