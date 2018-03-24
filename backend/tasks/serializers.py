from rest_framework import serializers

from tasks.models import Task, Project, Scope


class ProjectSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Project
        fields = ('id', 'owner', 'project_name', 'project_description',
        'total_tasks', 'total_finished_tasks', 'total_worked_time',
        'worked_since_start_of_week')


class ScopeSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Scope
        fields = ('id', 'owner', 'project', 'scope_name', 'scope_description',
                  'priority', 'due_date')


class TaskSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Task
        fields = ('id', 'owner', 'task_name', 'task_description', 'priority',
        'due_date', 'finished', 'project', 'scope')

class DetailedTaskSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    project = ProjectSerializer()
    scope = ScopeSerializer()

    class Meta:
        model = Task
        fields = ('id', 'owner', 'task_name', 'task_description', 'project',
                  'scope', 'priority', 'due_date', 'finished')
