from django.db import models
from django.contrib.auth.models import User


class Report(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    task = models.ForeignKey('tasks.Task', on_delete=models.CASCADE)
    scope = models.ForeignKey('tasks.Scope', null=True, blank=True, on_delete=models.CASCADE)
    project = models.ForeignKey('tasks.Project', null=True, blank=True, on_delete=models.CASCADE)
    start = models.DateTimeField()
    end = models.DateTimeField()

    @property
    def total_in_seconds(self):
        """calculate difference, in seconds, between start and end"""
        return (self.end - self.start).total_seconds()
