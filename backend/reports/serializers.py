from rest_framework import serializers

from reports.models import Report


class ReportSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Report
        fields = ('id', 'owner', 'task', 'project', 'scope', 'start', 'end',
                  'total_in_seconds')
