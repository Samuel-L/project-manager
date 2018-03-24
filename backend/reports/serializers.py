from rest_framework import serializers

from tasks.serializers import ProjectSerializer

from reports.models import Report


class ReportSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Report
        fields = ('id', 'owner', 'task', 'project', 'scope', 'start', 'end',
                  'total_in_seconds')

class DetailedReportSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    project = ProjectSerializer()

    class Meta:
        model = Report
        fields = ('id', 'owner', 'task', 'project', 'scope', 'start', 'end',
                  'total_in_seconds')
