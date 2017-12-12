from django.db import models
from django.contrib.auth.models import User

from tasks.consts import PRIORITIES


class Task(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    task_name = models.CharField(max_length=255)
    task_description = models.TextField()
    priority = models.IntegerField(choices=PRIORITIES)
    due_date = models.DateTimeField()
