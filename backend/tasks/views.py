from rest_framework import viewsets

from tasks.models import Task, Project, Scope
from tasks.serializers import TaskSerializer, ProjectSerializer,\
    ScopeSerializer, DetailedTaskSerializer
from utils.permissions import IsOwner


class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    permission_classes = (IsOwner,)

    def get_queryset(self):
        """Only return projects that user created."""
        projects = Project.objects.filter(owner=self.request.user)
        return projects

    def perform_create(self, serializer):
        """Set owner to the user creating the project and create entry."""
        serializer.save(owner=self.request.user)


class ScopeViewSet(viewsets.ModelViewSet):
    serializer_class = ScopeSerializer
    permission_classes = (IsOwner,)

    def get_queryset(self):
        """Only return scopes that user created."""
        scopes = Scope.objects.filter(owner=self.request.user)
        return scopes

    def perform_create(self, serializer):
        """Set owner to the user creating the scope and create entry."""
        serializer.save(owner=self.request.user)


class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    permission_classes = (IsOwner,)

    def get_queryset(self):
        """Only return tasks that user created."""
        tasks = Task.objects.filter(owner=self.request.user)
        return tasks

    def get_serializer_class(self):
        if self.action == 'list':
            return DetailedTaskSerializer
        if self.action == 'retrieve':
            return DetailedTaskSerializer
        return TaskSerializer

    def perform_create(self, serializer):
        """Set owner to the user creating the task and create entry."""
        serializer.save(owner=self.request.user)
