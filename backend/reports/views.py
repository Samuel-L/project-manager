from rest_framework import viewsets

from reports.models import Report
from reports.serializers import ReportSerializer, DetailedReportSerializer
from utils.permissions import IsOwner


class ReportViewSet(viewsets.ModelViewSet):
    serializer_class = ReportSerializer
    permission_classes = (IsOwner,)

    def get_serializer_class(self):
        if self.action == 'list':
            return DetailedReportSerializer
        if self.action == 'retrieve':
            return DetailedReportSerializer
        return ReportSerializer

    def get_queryset(self):
        """Only return reports that user created."""
        reports = Report.objects.filter(owner=self.request.user)
        return reports

    def perform_create(self, serializer):
        """Set owner to user creating report and save entry."""
        serializer.save(owner=self.request.user)
