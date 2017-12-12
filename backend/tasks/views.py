from rest_framework import viewsets

from tasks.models import Task, Project
from tasks.serializers import TaskSerializer, ProjectSerializer
from utils.permissions import IsOwner


class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    permission_classes = (IsOwner,)

    def get_queryset(self):
        """Only return projects that user created."""
        projects = Project.object.filter(owner=self.request.user)
        return projects

    def perform_create(self, serializer):
        """Set owner to the user creating the project and create entry."""
        serializer.save(owner=self.request.user)


class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    permission_classes = (IsOwner,)

    def get_queryset(self):
        """Only return tasks that user created."""
        tasks = Task.object.filter(owner=self.request.user)
        return tasks

    def perform_create(self, serializer):
        """Set owner to the user creating the task and create entry."""
        serializer.save(owner=self.request.user)
