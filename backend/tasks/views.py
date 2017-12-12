from rest_framework import viewsets

from tasks.models import Task
from tasks.serializers import TaskSerializer
from utils.permissions import IsOwner


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
