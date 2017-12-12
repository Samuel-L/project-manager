from rest_framework import viewsets

from reports.models import Report
from reports.serializers import ReportSerializer
from utils.permissions import IsOwner


class ReportViewSet(viewsets.ModelViewSet):
    serializer_class = ReportSerializer
    permission_classes = (IsOwner,)

    def get_queryset(self):
        """Only return reports that user created."""
        reports = Report.objects.filter(owner=self.request.user)
        return reports

    def perform_create(self, serializer):
        """Set owner to user creating report and save entry."""
        serializer.save(owner=self.request.user)
