from django.db import models
from django.contrib.auth.models import User

from datetime import timedelta
from django.utils import timezone

from reports.models import Report

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

    @property
    def total_worked_time(self):
        """Calculate how many minutes the user has worked on the project"""
        total_reports = Report.objects.filter(project=self.id)
        worked_time = 0
        for report in total_reports:
            worked_time += report.total_in_seconds / 60

        return worked_time

    @property
    def worked_since_start_of_week(self):
        """
        Calculate how many minutes the user has worked on
        the project the last seven days.
        """
        today = timezone.now()
        start_of_week = today - timedelta(days=today.weekday())
        reports_since_start_of_week = Report.objects.filter(project=self.id).filter(
            start__gte=start_of_week
        )
        worked_time = 0
        for report in reports_since_start_of_week:
            worked_time += report.total_in_seconds / 60

        return worked_time

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
