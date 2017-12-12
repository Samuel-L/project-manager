from django.db import models
from django.contrib.auth.models import User

from tasks.models import Task, Scope, Project


class Report(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    scope = models.ForeignKey(Scope, on_delete=models.CASCADE)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    start = models.DateTimeField()
    end = models.DateTimeField()

    @property
    def total_in_seconds(self):
        """calculate difference, in seconds, between start and end"""
        return (self.end - self.start).total_seconds()
