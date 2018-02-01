from django.db import models
from django.contrib.auth.models import User

from tasks.consts import PRIORITIES


class Project(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    project_name = models.CharField(max_length=255)
    project_description = models.TextField()

    @property
    def total_tasks(self):
        """Calculate how many tasks the project is the parent of"""
        total_tasks = len(Task.objects.filter(project=self.id))
        return total_tasks

    @property
    def total_finished_tasks(self):
        """Calculate how many finished tasks the project is the parent of"""
        total_tasks = Task.objects.filter(project=self.id)
        total_finished_tasks = 0
        for task in total_tasks:
            if task.finished:
                total_finished_tasks += 1
        return total_finished_tasks

    def __str__(self):
        return self.project_name

    class Meta:
        ordering = ('project_name',)


class Scope(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    scope_name = models.CharField(max_length=255)
    scope_description = models.TextField()
    priority = models.IntegerField(choices=PRIORITIES)
    due_date = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return self.scope_name

    class Meta:
        ordering = ('scope_name',)


class Task(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    project = models.ForeignKey(Project, blank=True, null=True,
                                on_delete=models.CASCADE)
    scope = models.ForeignKey(Scope, blank=True, null=True,
                              on_delete=models.CASCADE)
    task_name = models.CharField(max_length=255)
    task_description = models.TextField()
    priority = models.IntegerField(choices=PRIORITIES)
    due_date = models.DateTimeField(blank=True, null=True)
    finished = models.BooleanField()

    def __str__(self):
        return self.task_name

    class Meta:
        ordering = ('task_name',)
